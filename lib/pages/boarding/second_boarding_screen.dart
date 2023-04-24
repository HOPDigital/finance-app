import 'package:flutter/material.dart';
import 'package:flutter_application/layouts/boarding_layout.dart';

// Widgets
import '../../widgets/app_large_text.dart';
import '../../widgets/app_screen_title.dart';

class SecondBoardingScreen extends StatelessWidget {
  const SecondBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return BoardingLayout(
      column: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          AppScreenTitle(
            text: 'What\'s new',
            leftButton: IconButton(
              onPressed: () => {},
              icon: const Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.white,
              ),
            ),
            rightButton: const Text(
              'Skip',
              style: TextStyle(color: Colors.white),
            ),
          ),
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
