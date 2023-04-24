import 'package:flutter/material.dart';
import 'package:flutter_application/utils/styles/colors.dart';

// Dependecies
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

// Pages
import 'package:flutter_application/pages/boarding/first_boarding_screen.dart';
import 'package:flutter_application/pages/boarding/second_boarding_screen.dart';
import 'package:flutter_application/pages/boarding/third_boarding_screen.dart';

class OnBoardingScreen extends StatefulWidget {
  const OnBoardingScreen({super.key});

  @override
  State<OnBoardingScreen> createState() => _OnBoardingScreenState();
}

class _OnBoardingScreenState extends State<OnBoardingScreen> {
  final PageController _controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView(
            controller: _controller,
            children: const [
              FirstBoardingScreen(),
              SecondBoardingScreen(),
              ThirdBoardingScreen()
            ],
          ),
          Container(
            alignment: const Alignment(0, 0.9),
            child: SmoothPageIndicator(
              controller: _controller,
              count: 3,
              effect: ExpandingDotsEffect(
                activeDotColor: AppColors.whiteColor,
                dotColor: AppColors.whiteColor,
                dotHeight: 10,
                dotWidth: 10,
                spacing: 10
              ),
            ),
          ),
        ],
      ),
    );
  }
}
