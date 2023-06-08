import 'dart:ui';
import 'package:flutter/material.dart';

class CreditCard {
  final String name;
  final String currency;
  final Color color;
  final Color textColor;

  final int number;
  final String date;
  final double balance;

  CreditCard({
    required this.number,
    required this.balance,
    required this.color,
    required this.textColor,
    this.currency = 'USD',
    this.name = 'My Personal Card',
    this.date = '01/23',
  });
}
