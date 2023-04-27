import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/styles/typography.dart';

class IconButtonWidget extends StatelessWidget {
  const IconButtonWidget({
    Key? key,
    required this.placeholder,
    required this.icon,
    required this.bgColor,
    required this.function,
    required this.buttonWidth,
    this.buttonHeight = 60,
  }) : super(key: key);

  final String placeholder;
  final Icon icon;
  final Color bgColor;
  final VoidCallback function;
  final double buttonHeight;
  final double buttonWidth;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        fixedSize: Size(buttonWidth, buttonHeight),
        backgroundColor: bgColor,
        foregroundColor: Colors.white,
        textStyle: AppTypography.callout.copyWith(fontWeight: FontWeight.bold),
        padding: const EdgeInsets.symmetric(horizontal: 20),
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(10)),
        ),
      ),
      onPressed: function,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [Text(placeholder), icon],
      ),
    );
  }
}
