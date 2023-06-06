import 'package:flutter/material.dart';
import 'package:flutter_application/pages/boarding/boarding_screen.dart';
import 'package:flutter_application/pages/check_user_account.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_application/pages/splash_intro_screen.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final prefs = await SharedPreferences.getInstance();
  final showCheckUserAccount = prefs.getBool('showCheckUserAccount') ?? false;

  runApp(MainApp(showCheckUserAccount: showCheckUserAccount));
}

class MainApp extends StatelessWidget {
  const MainApp({super.key, required this.showCheckUserAccount});

  final bool showCheckUserAccount;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: showCheckUserAccount
          ? const SplashIntroScreen(screenToBeCalled: CheckUserAccount())
          : const SplashIntroScreen(screenToBeCalled: OnBoardingScreen()),
    );
  }
}
