import 'package:flutter/material.dart';
import 'package:flutter_application/pages/boarding/first_boarding.dart';
import 'package:flutter_application/source/model/CreditCard.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/widgets/CreditCard.dart';

void main() => runApp(const MainApp());

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        debugShowCheckedModeBanner: false, home: FirstBoardingScreen());
  }
}
