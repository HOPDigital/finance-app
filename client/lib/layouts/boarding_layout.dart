import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import '../utils/styles/colors.dart';

class BoardingLayout extends StatelessWidget {
  const BoardingLayout({Key? key, required this.column}) : super(key: key);

  final Column column;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      body: Container(
        padding: const EdgeInsets.symmetric(vertical: 25, horizontal: 15),
        decoration: BoxDecoration(
          color: AppColors.blueColor,
          shape: BoxShape.rectangle,
        ),
        width: size.width,
        child: column,
      ),
    );
  }
}
