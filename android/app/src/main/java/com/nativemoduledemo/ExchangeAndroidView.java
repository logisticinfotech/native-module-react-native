package com.nativemoduledemo;

import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * Created by ExchangeDemo on 17/12/18.
 */

public class ExchangeAndroidView extends LinearLayout {

    private Context mContext;

    private EditText edtCommComp;
    private TextView txtCommComp;
    private Button btnCommComp;

    private OnButtonClick onButtonClick;

    public ExchangeAndroidView(Context context) {
        super(context);
        this.mContext = context;
        init();
    }

    private void init() {
        View view = inflate(mContext, R.layout.layout_exchange_android, this);
        edtCommComp = (EditText) view.findViewById(R.id.edt_comm_comp);
        txtCommComp = (TextView) view.findViewById(R.id.txt_comm_comp);
        btnCommComp = (Button) view.findViewById(R.id.btn_comm_comp);

        btnCommComp.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                if (onButtonClick != null)
                    onButtonClick.onClick(edtCommComp.getText().toString());
            }
        });
    }

    public String getInputText() {
        return edtCommComp.getText().toString();
    }

    public void setTextView(String text) {
        txtCommComp.setText(text);
    }

    public void setOnButtonClick(OnButtonClick onButtonClick) {
        this.onButtonClick = onButtonClick;
    }

    public interface OnButtonClick {
        void onClick(String text);
    }
}
