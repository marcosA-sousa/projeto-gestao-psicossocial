
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface DocCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}