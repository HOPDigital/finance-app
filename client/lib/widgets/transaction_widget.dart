import 'package:flutter/material.dart';

// Dependecies
import 'package:gap/gap.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class TransactionWidget extends StatefulWidget {
  const TransactionWidget({
    super.key,
    required this.icon,
    required this.title,
    required this.value,
  });

  final Icon icon;
  final String title;
  final double value;

  @override
  State<TransactionWidget> createState() => _TransactionWidgetState();
}

class _TransactionWidgetState extends State<TransactionWidget> {
  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Container(
      width: size.width * 0.8,
      height: 90,
      padding: const EdgeInsets.symmetric(horizontal: 10),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(
            width: 1,
            color: Color(0xFF646464),
          ),
        ),
      ),
      child: Row(
        children: [
          /* Icon Box */
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
          const Gap(10),
          /* Data about transaction */
          Expanded(
            child: SizedBox(
              height: 50,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  /* Details */
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        widget.title,
                        style: AppTypography.titleTwo.copyWith(
                          decoration: TextDecoration.none,
                        ),
                      ),
                      Text(
                        "Details",
                        style: AppTypography.callout.copyWith(
                          color: AppColors.dimGrayColor,
                          fontWeight: FontWeight.w600,
                          decoration: TextDecoration.none,
                        ),
                      ),
                    ],
                  ),

                  /* Currency */
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        widget.value.toString(),
                        style: AppTypography.titleTwo.copyWith(
                          decoration: TextDecoration.none,
                        ),
                      ),
                      Text(
                        "Currency",
                        style: AppTypography.callout.copyWith(
                          color: AppColors.dimGrayColor,
                          fontWeight: FontWeight.w600,
                          decoration: TextDecoration.none,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
