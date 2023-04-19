import 'package:flutter/material.dart';

class AppLargeText extends StatelessWidget {
  final String text;
  final Color color;
  final double size;

  const AppLargeText({
    super.key,
    required this.text,
    this.color = Colors.white,
    this.size = 34,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        fontSize: size,
        color: color,
        fontWeight: FontWeight.bold,
      ),
    );
  }
}
