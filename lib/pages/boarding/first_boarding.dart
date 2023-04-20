import 'package:flutter/material.dart';

import '../../utils/styles/colors.dart';
import '../../widgets/app_large_text.dart';
import '../../widgets/app_screen_title.dart';

class FirstBoardingScreen extends StatelessWidget {
  const FirstBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      decoration: BoxDecoration(color: AppColors.blueColor),
      child: Column(
        children: [
          const SizedBox(height: 25),
          AppScreenTitle(
            text: 'Boarding 01',
            leftButton: IconButton(
              onPressed: () => {},
              icon: const Icon(
                Icons.arrow_back_ios,
                size: 0,
              ),
            ),
            rightButton: const Text(
              'Pular',
              style: TextStyle(color: Colors.white),
            ),
          ),
          const SizedBox(height: 400),
          Container(
            padding: const EdgeInsets.only(left: 20),
            child: const AppLargeText(text: 'Track your money everywhere.'),
          ),
        ],
      ),
    ));
  }
}
