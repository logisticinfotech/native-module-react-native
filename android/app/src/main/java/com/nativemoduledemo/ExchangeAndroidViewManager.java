package com.nativemoduledemo;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by ExchangeDemo on 17/12/18.
 */

public class ExchangeAndroidViewManager extends SimpleViewManager<ExchangeAndroidView> {

    private static final String REACT_CLASS = "SwiftComponent";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ExchangeAndroidView createViewInstance(ThemedReactContext reactContext) {
        ExchangeAndroidView exchangeAndroidView = new ExchangeAndroidView(reactContext);
        onReceiveNativeEvent(reactContext, exchangeAndroidView);
        return exchangeAndroidView;
    }

    private void onReceiveNativeEvent(final ThemedReactContext reactContext, final ExchangeAndroidView exchangeAndroidView) {
        exchangeAndroidView.setOnButtonClick(new ExchangeAndroidView.OnButtonClick() {
            @Override
            public void onClick(String text) {
                WritableMap event = Arguments.createMap();
                event.putString("nativeObject", text);
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(exchangeAndroidView.getId(), "topChange", event);
            }
        });
    }

    @ReactProp(name = "nativeText")
    public void setAndroidText(ExchangeAndroidView exchangeAndroidView, String text) {
        exchangeAndroidView.setTextView(text);
    }
}
