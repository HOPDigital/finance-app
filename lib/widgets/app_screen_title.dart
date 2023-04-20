import 'package:flutter/material.dart';

class AppScreenTitle extends StatelessWidget {
  final Widget leftButton;
  final Widget rightButton;
  final String text;

  const AppScreenTitle({
    super.key,
    this.leftButton = const SizedBox(),
    this.rightButton = const SizedBox(),
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 10, right: 10),
      height: 50,
      width: double.maxFinite,
      alignment: Alignment.center,
      child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        leftButton,
        Text(
          text,
          style: const TextStyle(
              fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
        ),
        rightButton,
      ]),
    );
  }
}
