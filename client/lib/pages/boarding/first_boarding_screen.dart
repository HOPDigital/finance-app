import 'package:flutter/material.dart';
import 'package:flutter_application/layouts/boarding_layout.dart';

// Widgets
import '../../widgets/app_large_text.dart';
import '../../widgets/app_screen_title.dart';

class FirstBoardingScreen extends StatelessWidget {
  const FirstBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return BoardingLayout(
      column: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const AppScreenTitle(
            text: 'What\'s new',
            rightButton: Text(
              'Skip',
              style: TextStyle(color: Colors.white),
            ),
          ),
          Container(
            height: 240,
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: const AppLargeText(text: 'Track your money everywhere.'),
          ),
        ],
      ),
    );
  }
}
