import 'package:flutter/material.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class AppScreenTitle extends StatelessWidget {
  final Widget? leftButton;
  final Widget? rightButton;
  final String text;
  final Color textColor;

  const AppScreenTitle({
    super.key,
    required this.text,
    this.textColor = Colors.white,
    this.leftButton,
    this.rightButton,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
            height: 50,
            width: 100,
            child: Center(
                child: leftButton ?? const SizedBox(height: 20, width: 20))),
        Center(
          child: Text(
            text,
            style: AppTypography.headline.copyWith(color: textColor),
          ),
        ),
        SizedBox(
            height: 50,
            width: 100,
            child: Center(
                child: rightButton ?? const SizedBox(height: 20, width: 20)))
      ],
    );
  }
}
