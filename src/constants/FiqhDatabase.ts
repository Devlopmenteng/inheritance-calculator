/**
 * Fiqh Database - Comprehensive Islamic Inheritance Rules
 * Matches the HTML version logic 100%
 */

export type MadhabType = 'shafii' | 'hanafi' | 'maliki' | 'hanbali';

export interface MadhabConfig {
  id: MadhabType;
  name: string;
  arabicName: string;
  icon: string;
  color: string;
  gradient: string[];
  description: string;
  founder: string;
  rules: {
    grandfatherWithSiblings: 'blocks' | 'shares';
    raddToSpouse: boolean;
    bloodRelativesEnabled: boolean;
    musharrakaEnabled: boolean;
    akdariyyaEnabled: boolean;
  };
  characteristics: string[];
}

export const FIQH_DATABASE = {
  madhabs: {
    shafii: {
      id: 'shafii',
      name: 'الشافعي',
      arabicName: 'الإمام الشافعي',
      icon: '🟢',
      color: '#2E7D32',
      gradient: ['#2E7D32', '#1B5E20'],
      description:
        'الرد على أصحاب الفروض عدا الزوجين. الجد يحجب الإخوة مطلقاً. المشتركة معتبرة.',
      founder: 'الإمام محمد بن إدريس الشافعي',
      rules: {
        grandfatherWithSiblings: 'blocks',
        raddToSpouse: false,
        bloodRelativesEnabled: true,
        musharrakaEnabled: true,
        akdariyyaEnabled: true,
      },
      characteristics: [
        'الرد على أصحاب الفروض عدا الزوجين',
        'الجد يحجب الإخوة حجب حرمان',
        'المسألة المشتركة معتبرة',
        'ذوو الأرحام يرثون',
      ],
    } as MadhabConfig,
    hanafi: {
      id: 'hanafi',
      name: 'الحنفي',
      arabicName: 'الإمام أبو حنيفة',
      icon: '🔴',
      color: '#C62828',
      gradient: ['#C62828', '#8E0000'],
      description:
        'الرد على الزوجين عند عدم وجود غيرهم. الجد يحجب الإخوة. لا مشتركة.',
      founder: 'الإمام أبو حنيفة النعمان',
      rules: {
        grandfatherWithSiblings: 'blocks',
        raddToSpouse: true,
        bloodRelativesEnabled: true,
        musharrakaEnabled: false,
        akdariyyaEnabled: true,
      },
      characteristics: [
        'الرد على الزوجين عند عدم وجود غيرهم',
        'الجد يحجب الإخوة حجب حرمان',
        'لا مسألة مشتركة',
        'ذوو الأرحام يرثون',
      ],
    } as MadhabConfig,
    maliki: {
      id: 'maliki',
      name: 'المالكي',
      arabicName: 'الإمام مالك',
      icon: '🟣',
      color: '#6A1B9A',
      gradient: ['#6A1B9A', '#4A148C'],
      description:
        'الجد يُقاسم الإخوة. لا رد على الزوجين. الباقي لبيت المال. المشتركة معتبرة.',
      founder: 'الإمام مالك بن أنس',
      rules: {
        grandfatherWithSiblings: 'shares',
        raddToSpouse: false,
        bloodRelativesEnabled: false,
        musharrakaEnabled: true,
        akdariyyaEnabled: true,
      },
      characteristics: [
        'الجد يُقاسم الإخوة',
        'لا رد على الزوجين',
        'الباقي لبيت المال',
        'المسألة المشتركة معتبرة',
        'لا يرث ذوو الأرحام',
      ],
    } as MadhabConfig,
    hanbali: {
      id: 'hanbali',
      name: 'الحنبلي',
      arabicName: 'الإمام أحمد',
      icon: '🔵',
      color: '#1565C0',
      gradient: ['#1565C0', '#0D47A1'],
      description:
        'الجد يُقاسم الإخوة. يُرد على الزوجين عند الحاجة. لا مشتركة.',
      founder: 'الإمام أحمد بن حنبل',
      rules: {
        grandfatherWithSiblings: 'shares',
        raddToSpouse: true,
        bloodRelativesEnabled: true,
        musharrakaEnabled: false,
        akdariyyaEnabled: true,
      },
      characteristics: [
        'الجد يُقاسم الإخوة',
        'يُرد على الزوجين عند الحاجة',
        'لا مسألة مشتركة',
        'ذوو الأرحام يرثون',
      ],
    } as MadhabConfig,
  },

  heirNames: {
    husband: 'الزوج',
    wife: 'الزوجة',
    wives: 'الزوجات',
    father: 'الأب',
    mother: 'الأم',
    grandfather: 'الجد',
    grandmother: 'الجدة',
    grandmother_mother: 'الجدة لأم',
    grandmother_father: 'الجدة لأب',
    grandmothers: 'الجدات',
    son: 'الابن',
    sons: 'الأبناء',
    daughter: 'البنت',
    daughters: 'البنات',
    grandson: 'ابن الابن',
    grandsons: 'أبناء الابن',
    granddaughter: 'بنت الابن',
    granddaughters: 'بنات الابن',
    full_brother: 'الأخ الشقيق',
    full_brothers: 'الإخوة الأشقاء',
    full_sister: 'الأخت الشقيقة',
    full_sisters: 'الأخوات الشقيقات',
    paternal_brother: 'الأخ لأب',
    paternal_brothers: 'الإخوة لأب',
    paternal_sister: 'الأخت لأب',
    paternal_sisters: 'الأخوات لأب',
    maternal_brother: 'الأخ لأم',
    maternal_sister: 'الأخت لأم',
    maternal_siblings: 'الإخوة لأم',
    full_nephew: 'ابن الأخ الشقيق',
    paternal_nephew: 'ابن الأخ لأب',
    full_uncle: 'العم الشقيق',
    paternal_uncle: 'العم لأب',
    full_cousin: 'ابن العم الشقيق',
    paternal_cousin: 'ابن العم لأب',
    maternal_uncle: 'الخال',
    maternal_aunt: 'الخالة',
    paternal_aunt: 'العمة',
    daughter_son: 'ابن البنت',
    daughter_daughter: 'بنت البنت',
    sister_children: 'أولاد الأخت',
    treasury: 'بيت المال',
  } as Record<string, string>,

  heirDescriptions: {
    husband: '½ بدون فرع، ¼ مع فرع وارث',
    wife: '¼ بدون فرع، ⅛ مع فرع (يشتركن)',
    father: '⅙ + تعصيب أو تعصيب فقط',
    mother: '⅙ أو ⅓ أو ثلث الباقي',
    grandfather: 'أبو الأب وإن علا',
    grandmother_mother: '⅙ عند عدم الأم',
    grandmother_father: '⅙ عند عدم الأم والأب',
    son: 'عصبة بالنفس',
    daughter: '½ أو ⅔ أو عصبة بالغير',
    grandson: 'عصبة وإن نزل',
    granddaughter: '⅙ تكملة أو ⅔',
    full_brother: 'عصبة بالنفس',
    full_sister: '½ أو ⅔ أو عصبة',
    paternal_brother: 'عصبة',
    paternal_sister: '⅙ تكملة أو عصبة',
    maternal_brother: '⅙ أو ⅓ بالتساوي',
    maternal_sister: '⅙ أو ⅓ بالتساوي',
    full_nephew: 'عصبة',
    paternal_nephew: 'عصبة',
    full_uncle: 'عصبة',
    paternal_uncle: 'عصبة',
    full_cousin: 'عصبة',
    paternal_cousin: 'عصبة',
    daughter_son: 'ذو رحم - صنف 1',
    daughter_daughter: 'ذو رحم - صنف 1',
    sister_children: 'ذو رحم - صنف 2',
    maternal_uncle: 'ذو رحم - صنف 3',
    maternal_aunt: 'ذو رحم - صنف 3',
    paternal_aunt: 'ذو رحم - صنف 4',
  } as Record<string, string>,

  heirConstraints: {
    husband: { max: 1 },
    wife: { max: 4 },
    father: { max: 1 },
    mother: { max: 1 },
    grandfather: { max: 1 },
    grandmother_mother: { max: 1 },
    grandmother_father: { max: 1 },
  } as Record<string, { max: number }>,

  heirCategories: {
    spouses: ['husband', 'wife'],
    parents: [
      'father',
      'mother',
      'grandfather',
      'grandmother_mother',
      'grandmother_father',
    ],
    children: ['son', 'daughter', 'grandson', 'granddaughter'],
    siblings: [
      'full_brother',
      'full_sister',
      'paternal_brother',
      'paternal_sister',
      'maternal_brother',
      'maternal_sister',
    ],
    extended: [
      'full_nephew',
      'paternal_nephew',
      'full_uncle',
      'paternal_uncle',
      'full_cousin',
      'paternal_cousin',
    ],
    bloodRelatives: [
      'daughter_son',
      'daughter_daughter',
      'sister_children',
      'maternal_uncle',
      'maternal_aunt',
      'paternal_aunt',
    ],
  },

  bloodRelativesOrder: [
    { key: 'daughter_son', class: 1, name: 'ابن البنت' },
    { key: 'daughter_daughter', class: 1, name: 'بنت البنت' },
    { key: 'sister_children', class: 2, name: 'أولاد الأخت' },
    { key: 'maternal_uncle', class: 3, name: 'الخال' },
    { key: 'maternal_aunt', class: 3, name: 'الخالة' },
    { key: 'paternal_aunt', class: 4, name: 'العمة' },
  ],

  specialCases: {
    umariyyah: {
      name: 'العُمَريَّتان',
      description: 'حالتان خاصتان عند وجود الزوج/الزوجة مع الأب والأم فقط',
      cases: [
        {
          name: 'الأولى',
          heirs: ['husband', 'father', 'mother'],
          note: 'الأم تأخذ ثلث الباقي = ⅙',
        },
        {
          name: 'الثانية',
          heirs: ['wife', 'father', 'mother'],
          note: 'الأم تأخذ ثلث الباقي = ¼',
        },
      ],
    },
    awl: {
      name: 'العَوْل',
      description: 'عندما يزيد مجموع الفروض عن أصل المسألة، يُزاد المقام',
      example: 'زوج + أم + أختان = ¼ + ⅙ + ⅔ = 13/12 > 1 → عول إلى 13',
    },
    radd: {
      name: 'الرَّد',
      description: 'عندما يبقى فائض ولا يوجد عصبة، يُرد على أصحاب الفروض',
      note: 'الزوجان لا يردان إلا في المذهب الحنفي والحنبلي',
    },
    musharraka: {
      name: 'المسألة المشتركة (الحمارية)',
      description: 'الإخوة الأشقاء يشتركون مع الإخوة لأم في الثلث بالتساوي',
      condition: 'زوج + أم/جدة + إخوة لأم (2+) + إخوة أشقاء',
    },
    akdariyya: {
      name: 'الأكدرية (الغرّاء)',
      description: 'مسألة فريدة يُفرض للأخت مع الجد ثم يُجمع نصيباهما ويُقسم',
      condition: 'زوج + أم + جد + أخت شقيقة',
      base: 'من 27: زوج 9/27، أم 6/27، جد 8/27، أخت 4/27',
    },
  },

  fardShares: {
    half: {
      value: 1 / 2,
      arabic: '½',
      heirs: [
        'husband (no descendants)',
        'daughter (single)',
        'granddaughter (single, no daughter)',
        'full_sister (single, no descendants)',
        'paternal_sister (single, no full sister, no descendants)',
      ],
    },
    quarter: {
      value: 1 / 4,
      arabic: '¼',
      heirs: ['husband (with descendants)', 'wife (no descendants)'],
    },
    eighth: { value: 1 / 8, arabic: '⅛', heirs: ['wife (with descendants)'] },
    twoThirds: {
      value: 2 / 3,
      arabic: '⅔',
      heirs: [
        'daughters (2+)',
        'granddaughters (2+, no daughter)',
        'full_sisters (2+, no descendants)',
        'paternal_sisters (2+, no full sister, no descendants)',
      ],
    },
    third: {
      value: 1 / 3,
      arabic: '⅓',
      heirs: [
        'mother (no descendants, siblings < 2)',
        'maternal_siblings (2+)',
      ],
    },
    sixth: {
      value: 1 / 6,
      arabic: '⅙',
      heirs: [
        'father (with male descendant)',
        'mother (with descendants or siblings 2+)',
        'grandfather',
        'grandmothers',
        'granddaughter (with single daughter)',
        'paternal_sister (with single full sister)',
        'maternal_sibling (single)',
      ],
    },
  },
};

export const getMadhabConfig = (madhab: MadhabType): MadhabConfig => {
  return FIQH_DATABASE.madhabs[madhab];
};

export const getHeirName = (key: string): string => {
  return FIQH_DATABASE.heirNames[key] || key;
};

export const getHeirDescription = (key: string): string => {
  return FIQH_DATABASE.heirDescriptions[key] || '';
};

export const getMadhabColor = (madhab: MadhabType): string => {
  return FIQH_DATABASE.madhabs[madhab].color;
};

export const getMadhabGradient = (madhab: MadhabType): string[] => {
  return FIQH_DATABASE.madhabs[madhab].gradient;
};
