import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';

class ScreensLayout extends StatelessWidget {
  const ScreensLayout({
    super.key,
    required this.column,
    this.widgetBackgroundColor = const Color(0xFF523CF8),
  });

  final Color widgetBackgroundColor;
  final Column column;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      body: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 25, horizontal: 15),
          decoration: BoxDecoration(
            color: widgetBackgroundColor,
            shape: BoxShape.rectangle,
          ),
          width: size.width,
          child: column,
        ),
      ),
    );
  }
}
