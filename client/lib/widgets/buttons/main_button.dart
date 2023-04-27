import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class MainButton extends StatelessWidget {
  const MainButton({
    Key? key,
    required this.placeholder,
    required this.function,
    required this.buttonWidth,
    this.buttonHeight = 60,
  }) : super(key: key);

  final String placeholder;
  final double buttonHeight;
  final double buttonWidth;
  final VoidCallback function;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        fixedSize: Size(buttonWidth, buttonHeight),
        backgroundColor: AppColors.bitterSweetColor,
        foregroundColor: Colors.white,
        textStyle: AppTypography.callout.copyWith(fontWeight: FontWeight.bold),
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10))),
      ),
      onPressed: function,
      child: Text(placeholder),
    );
  }
}
