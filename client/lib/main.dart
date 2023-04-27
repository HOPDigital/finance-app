import 'package:flutter/material.dart';

// Pages
import 'package:flutter_application/pages/boarding/boarding_screen.dart';

void main() => runApp(const MainApp());

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: const OnBoardingScreen(),
    );
  }
}
