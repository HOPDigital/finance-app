import 'package:flutter/material.dart';

// Dependecies
import 'package:gap/gap.dart';

// Utils
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class IconSwitch extends StatefulWidget {
  const IconSwitch({
    Key? key,
    required this.icon,
    required this.text,
  }) : super(key: key);

  final Icon icon;
  final String text;

  @override
  State<IconSwitch> createState() => _IconSwitchState();
}

class _IconSwitchState extends State<IconSwitch> {
  bool switchButton = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.transparent,
        border: Border.all(width: 1.0, color: Colors.grey),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  color: AppColors.bitterSweetColor,
                  borderRadius: BorderRadius.circular(5),
                ),
                child: Center(
                  child: widget.icon,
                ),
              ),
              const Gap(15),
              // Text
              Text(
                widget.text,
                style: AppTypography.titleOne,
              ),
            ],
          ),
          // Switch Button
          Switch.adaptive(
            value: switchButton,
            activeColor: Colors.white,
            activeTrackColor: AppColors.blueColor,
            onChanged: (bool value) {
              setState(() {
                switchButton = value;
              });
            },
          )
        ],
      ),
    );
  }
}
