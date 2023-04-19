import 'package:flutter/material.dart';

class AppScreenTitle extends StatelessWidget {
  final IconButton? leftButton;
  final IconButton? rightButton;
  final String text;

  const AppScreenTitle({
    super.key,
    this.leftButton,
    this.rightButton,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Row(children: [
        leftButton!,
        rightButton!,
        Text(
          text,
          style: TextStyle(fontSize: 16),
        )
      ]),
    );
  }
}
