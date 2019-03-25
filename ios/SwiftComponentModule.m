#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
@interface RCT_EXTERN_MODULE(SwiftComponentManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(nativeText, NSString)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(updateValueViaManager:(nonnull NSNumber *)node)
  
@end
