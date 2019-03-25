import Foundation
@objc (SwiftComponentManager)
class SwiftComponentManager: RCTViewManager {
  
  override func view() -> UIView! {
    return NativeView()
  }
  


  func updateValueViaManager(_ node:NSNumber) {
  DispatchQueue.main.async {
    let myLabel = self.bridge.uiManager.view(forReactTag: node) as! NativeView
    myLabel.updateValue()
  }
}
}
