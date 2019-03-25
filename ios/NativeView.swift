import UIKit

class NativeView: UIView {
  
  var onChange: RCTBubblingEventBlock?
  
  let label = UILabel()
  let txtField = UITextField()
  var btn:UIButton!
  
  private var _nativeText:String?
  
  var nativeText: String? {
    set {
      _nativeText = newValue
    }
    get {
      return _nativeText
    }
  }
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addCustomView()
  }
  
  required init(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func addCustomView() {
    txtField.frame = CGRect(x: 32, y: 30, width: 300, height: 30)
    txtField.placeholder = "Enter Text"
    txtField.isUserInteractionEnabled = true
    
    label.frame = CGRect(x: 32, y: 90, width: 200, height: 30)
    label.textColor = UIColor.gray
    label.text = "Text"
    
    btn = UIButton.init(type: .custom)
    btn.frame = CGRect(x: 32, y: 120, width: 300, height: 30)
    btn.backgroundColor=UIColor.gray
    btn.setTitle("Click Here", for: UIControlState.normal)
    btn.addTarget(self, action: #selector(pressButton(_:)), for: .touchUpInside)
    
    
    
    
    
    self.addSubview(txtField)
    self.addSubview(label)
    self.addSubview(btn)
  }
  func updateValue() {
    
    label.text = nativeText as? String
  }
  @objc func pressButton(_ sender: UIButton){
    
    if onChange != nil {
      onChange!(["nativeObject": txtField.text!])
    }
  }
}
