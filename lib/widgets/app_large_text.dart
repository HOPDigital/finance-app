import 'package:flutter/material.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class AppLargeText extends StatelessWidget {
  final String text;

  const AppLargeText({
    Key? key,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: AppTypography.heroText
    );
  }
}
