import 'package:flutter/material.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';

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
  int currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView(
            controller: _controller,
            onPageChanged: (int index) {
              setState(() {
                currentPage = index;
              });
            },
            children: const [
              FirstBoardingScreen(),
              SecondBoardingScreen(),
              ThirdBoardingScreen(),
            ],
          ),
          Positioned(
            top: 40.0,
            left: 0,
            right: 0,
            child: AppScreenTitle(
              text: "What's new",
              leftButton: currentPage == 0
              ? null
              : IconButton(
                onPressed: () => _controller.previousPage(
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.bounceIn),
                icon: Icon(
                  Icons.arrow_back_ios,
                  color: AppColors.whiteColor,
                ),
              ),
              rightButton: currentPage == 2
                  ? null
                  : TextButton(
                      onPressed: () => _controller.animateToPage(
                        3,
                        duration: const Duration(milliseconds: 300),
                        curve: Curves.bounceIn,
                      ),
                      child: Text(
                        "Skip",
                        style: TextStyle(
                          color: AppColors.whiteColor,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
            ),
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
                spacing: 10,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
