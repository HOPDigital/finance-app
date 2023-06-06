import 'package:flutter/material.dart';
import 'package:flutter_application/layouts/screens_layout.dart';

// Widgets
import '../../widgets/app_layout/app_large_text.dart';

class SecondBoardingScreen extends StatelessWidget {
  const SecondBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ScreensLayout(
      column: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const SizedBox(),
          Container(
            height: 240,
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: const AppLargeText(text: 'Explore secure and fast payment'),
          ),
        ],
      ),
    );
  }
}
