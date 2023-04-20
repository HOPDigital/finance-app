import 'package:flutter/material.dart';

// Utils
import '../utils/styles/colors.dart';

class BoardingLayout extends StatelessWidget {
  const BoardingLayout({Key? key, required this.column}) : super(key: key);

  final Column column;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.symmetric(vertical: 30),
        decoration: BoxDecoration(color: AppColors.blueColor),
        child: column,
      ),
    );
  }
}
