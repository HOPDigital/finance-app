import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_application/pages/login/select_account.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:pin_code_fields/pin_code_fields.dart';

class PinCodeVerification extends StatefulWidget {
  const PinCodeVerification({super.key, this.phoneNumber});

  final String? phoneNumber;

  @override
  State<PinCodeVerification> createState() => _PinCodeVerificationState();
}

class _PinCodeVerificationState extends State<PinCodeVerification> {
  final TextEditingController _controller = TextEditingController();

  bool hasError = false;
  String currentText = "";
  final formKey = GlobalKey<FormState>();

  snackBar(String? message) {
    return ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message!),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return PinCodeTextField(
      appContext: context,
      controller: _controller,
      length: 6,
      obscureText: false,
      inputFormatters: [FilteringTextInputFormatter.digitsOnly],
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      keyboardType: TextInputType.number,
      pinTheme: PinTheme(
        shape: PinCodeFieldShape.underline,
        fieldHeight: 40,
        fieldWidth: 30,
        activeColor: Colors.black,
        inactiveColor: Colors.black,
        selectedColor: AppColors.blueColor,
        activeFillColor: AppColors.whiteColor,
        selectedFillColor: AppColors.whiteColor,
        inactiveFillColor: AppColors.whiteColor,
      ),
      animationType: AnimationType.fade,
      animationDuration: const Duration(milliseconds: 100),
      animationCurve: Curves.easeInOut,
      backgroundColor: AppColors.whiteColor,
      enableActiveFill: true,
      onChanged: (value) {
        setState(() {
          currentText = value;
        });
      },
      onCompleted: (value) async {
        debugPrint("Completed");
        Navigator.pushReplacement(
            context, MaterialPageRoute(builder: (_) => const SelectAccount()));
      },
      beforeTextPaste: (text) {
        debugPrint("Allowing to paste $text");

        return true;
      },
    );
  }
}
