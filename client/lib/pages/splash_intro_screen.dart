import 'package:flutter/material.dart';

// Dependencies
import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:page_transition/page_transition.dart';

// Utils
import 'package:flutter_application/utils/styles/colors.dart';

class SplashIntroScreen extends StatefulWidget {
  const SplashIntroScreen({super.key, required this.screenToBeCalled});

  final Widget screenToBeCalled;

  @override
  State<SplashIntroScreen> createState() => _SplashIntroScreenState();
}

class _SplashIntroScreenState extends State<SplashIntroScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnimatedSplashScreen(
        duration: 3000,
        splash: const Icon(
          Icons.monetization_on_rounded,
          color: Colors.white,
          size: 100,
        ),
        splashTransition: SplashTransition.fadeTransition,
        pageTransitionType: PageTransitionType.fade,
        backgroundColor: AppColors.blueColor,
        nextScreen: widget.screenToBeCalled,
      ),
    );
  }
}
