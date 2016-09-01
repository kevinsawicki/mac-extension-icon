#import <AppKit/AppKit.h>
#import <nan.h>
#import <string>

class IconWorker : public Nan::AsyncWorker {
 public:
  IconWorker(Nan::Callback *callback, std::string extension)
    : AsyncWorker(callback),
      extension(extension),
      data(nullptr),
      dataSize(-1) {

  }

  ~IconWorker() {
    delete data;
  }

  void Execute () {
    NSString* fileType = [NSString stringWithCString:extension.c_str()
                                            encoding:[NSString defaultCStringEncoding]];
    NSImage* iconImage = [[NSWorkspace sharedWorkspace] iconForFileType:fileType];
    NSData*  tiffData = [iconImage TIFFRepresentation];
    NSBitmapImageRep* bitmapRep = [NSBitmapImageRep imageRepWithData:tiffData];
    NSDictionary* imageProps = [NSDictionary dictionary];
    NSData* pngData = [bitmapRep representationUsingType:NSPNGFileType
                                              properties:imageProps];

    dataSize = [pngData length];
    data = new char[dataSize];
    memcpy(data, [pngData bytes], dataSize);
  }

  void HandleOKCallback () {
    Nan::HandleScope scope;
    v8::Local<v8::Value> argv[] = {
      Nan::Null(),
      Nan::CopyBuffer(data, dataSize).ToLocalChecked()
    };
    callback->Call(2, argv);
  }

 private:
  std::string extension;
  char* data;
  int dataSize;
};

NAN_METHOD(GetIconForExtension) {
  v8::String::Utf8Value utf8Extension(Nan::To<v8::String>(info[0]).ToLocalChecked());
  std::string extension(*utf8Extension, utf8Extension.length());
  Nan::Callback *callback = new Nan::Callback(info[1].As<v8::Function>());
  Nan::AsyncQueueWorker(new IconWorker(callback, extension));
}

void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("getIconForExtension").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(GetIconForExtension)->GetFunction());
}

NODE_MODULE(mac_extension_icon, Init)
