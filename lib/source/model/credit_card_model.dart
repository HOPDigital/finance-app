import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_application/utils/styles/colors.dart';

class CreditCard {
  final String name;
  final String currency;
  final Color color = AppColors.blueColor;

  final int number;
  final String date;
  final double balance;

  CreditCard({
    required this.number,
    required this.balance,
    this.currency = 'USD',
    this.name = 'My Personal Card',
    this.date = '01/23',
  });
}
