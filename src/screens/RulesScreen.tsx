import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Text,
  Card,
  List,
  Surface,
  Divider,
  DataTable,
  Avatar,
  useTheme,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FIQH_DATABASE,
  MadhabType,
  getMadhabColor,
} from '../constants/FiqhDatabase';
import { theme } from '../themes';

const madhabs: MadhabType[] = ['shafii', 'hanafi', 'maliki', 'hanbali'];

const specialCases = [
  {
    name: 'العُمَريَّتان',
    description:
      'زوج/زوجة + أب + أم بدون فرع وارث. الأم تأخذ ثلث الباقي بعد فرض الزوج/الزوجة.',
    color: '#F9A825',
    icon: 'account-group',
  },
  {
    name: 'العَوْل',
    description:
      'عندما يزيد مجموع الفروض عن أصل المسألة، يُزاد المقام ليتسع للجميع.',
    color: '#E65100',
    icon: 'trending-up',
  },
  {
    name: 'الرَّد',
    description:
      'عندما يبقى فائض ولا يوجد عصبة، يُرد على أصحاب الفروض بنسبة فروضهم.',
    color: '#1565C0',
    icon: 'undo',
  },
  {
    name: 'المشتركة (الحمارية)',
    description:
      'زوج + أم/جدة + إخوة لأم (2+) + إخوة أشقاء. الإخوة الأشقاء يشتركون مع الإخوة لأم.',
    color: '#7B1FA2',
    icon: 'account-multiple',
  },
  {
    name: 'الأكدرية',
    description: 'زوج + أم + جد + أخت شقيقة. تُجمع وتُقسم بطريقة خاصة.',
    color: '#00897B',
    icon: 'star',
  },
  {
    name: 'عصبة مع الغير',
    description: 'الأخت الشقيقة أو لأب مع البنت أو بنت الابن تصبح عصبة.',
    color: '#C62828',
    icon: 'account-plus',
  },
];

const fardTable = [
  {
    fraction: 'النصف (½)',
    heirs:
      'البنت الواحدة، بنت الابن الواحدة، الأخت الشقيقة الواحدة، الأخت لأب الواحدة، الزوج بدون فرع',
  },
  { fraction: 'الربع (¼)', heirs: 'الزوج مع الفرع، الزوجة بدون فرع' },
  { fraction: 'الثمن (⅛)', heirs: 'الزوجة مع الفرع الوارث' },
  {
    fraction: 'الثلثان (⅔)',
    heirs:
      'البنتان فأكثر، بنتا الابن فأكثر، الأختان الشقيقتان فأكثر، الأختان لأب فأكثر',
  },
  {
    fraction: 'الثلث (⅓)',
    heirs: 'الأم بدون فرع وجمع إخوة، الإخوة لأم (2 فأكثر)',
  },
  {
    fraction: 'السدس (⅙)',
    heirs:
      'الأب مع الفرع، الأم مع الفرع أو جمع الإخوة، الجد، الجدة، بنت الابن تكملة، الأخت لأب تكملة، الأخ لأم الواحد',
  },
];

const hijabTable = [
  { blocked: 'الجد', blocker: 'الأب', type: 'حجب حرمان' },
  { blocked: 'الجدة لأب', blocker: 'الأم أو الأب', type: 'حجب حرمان' },
  { blocked: 'الجدة لأم', blocker: 'الأم', type: 'حجب حرمان' },
  { blocked: 'ابن الابن', blocker: 'الابن', type: 'حجب حرمان' },
  {
    blocked: 'بنت الابن',
    blocker: 'الابن، أو بنتان بدون معصب',
    type: 'حجب حرمان',
  },
  {
    blocked: 'الإخوة الأشقاء',
    blocker: 'الابن، ابن الابن، الأب',
    type: 'حجب حرمان',
  },
  {
    blocked: 'الإخوة لأب',
    blocker: 'الأخ الشقيق، أو من يحجب الأشقاء',
    type: 'حجب حرمان',
  },
  {
    blocked: 'الإخوة لأم',
    blocker: 'الفرع الوارث، الأب، الجد',
    type: 'حجب حرمان',
  },
];

const RulesScreen: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.secondary.main, '#9A7B1A']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text variant="headlineSmall" style={styles.headerTitle}>
          📚 القواعد الفقهية
        </Text>
        <Text variant="bodyMedium" style={styles.headerSubtitle}>
          قواعد وأسس حساب المواريث
        </Text>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Madhab Rules */}
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="قواعد المذاهب الأربعة"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="mosque"
                style={{ backgroundColor: theme.colors.primary.main }}
              />
            )}
          />
          <Card.Content>
            <View style={styles.madhabGrid}>
              {madhabs.map((madhab) => (
                <Surface
                  key={madhab}
                  style={[
                    styles.madhabCard,
                    { borderColor: getMadhabColor(madhab) },
                  ]}
                >
                  <Text
                    style={[
                      styles.madhabTitle,
                      { color: getMadhabColor(madhab) },
                    ]}
                  >
                    {FIQH_DATABASE.madhabs[madhab].icon}{' '}
                    {FIQH_DATABASE.madhabs[madhab].name}
                  </Text>
                  <Text style={styles.madhabDesc}>
                    {FIQH_DATABASE.madhabs[madhab].description}
                  </Text>
                </Surface>
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Special Cases */}
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="⚡ الحالات الخاصة المدعومة"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="lightning-bolt"
                style={{ backgroundColor: '#F9A825' }}
              />
            )}
          />
          <Card.Content>
            {specialCases.map((c, index) => (
              <Surface
                key={index}
                style={[styles.specialCase, { borderLeftColor: c.color }]}
              >
                <View style={styles.specialCaseHeader}>
                  <Avatar.Icon
                    size={36}
                    icon={c.icon}
                    style={{ backgroundColor: `${c.color}20` }}
                    color={c.color}
                  />
                  <Text style={[styles.specialCaseTitle, { color: c.color }]}>
                    {c.name}
                  </Text>
                </View>
                <Text style={styles.specialCaseDesc}>{c.description}</Text>
              </Surface>
            ))}
          </Card.Content>
        </Card>

        {/* Fard Table */}
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="📊 جدول الفروض المقدرة"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="table"
                style={{ backgroundColor: theme.colors.accent.teal }}
              />
            )}
          />
          <Card.Content>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={styles.fardColumn}>
                    الفرض
                  </DataTable.Title>
                  <DataTable.Title style={styles.heirsColumn}>
                    أصحابه
                  </DataTable.Title>
                </DataTable.Header>
                {fardTable.map((row, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={styles.fardColumn}>
                      <Text style={styles.fractionText}>{row.fraction}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.heirsColumn}>
                      <Text style={styles.heirsText}>{row.heirs}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </ScrollView>
          </Card.Content>
        </Card>

        {/* Hijab Rules */}
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="🚫 قواعد الحجب"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="block-helper"
                style={{ backgroundColor: '#C62828' }}
              />
            )}
          />
          <Card.Content>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={styles.hijabColumn}>
                    المحجوب
                  </DataTable.Title>
                  <DataTable.Title style={styles.hijabColumn}>
                    الحاجب
                  </DataTable.Title>
                  <DataTable.Title style={styles.hijabColumn}>
                    نوع الحجب
                  </DataTable.Title>
                </DataTable.Header>
                {hijabTable.map((row, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={styles.hijabColumn}>
                      <Text style={styles.blockedText}>{row.blocked}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.hijabColumn}>
                      <Text style={styles.blockerText}>{row.blocker}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.hijabColumn}>
                      <Text style={styles.hijabTypeText}>{row.type}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </ScrollView>
          </Card.Content>
        </Card>

        {/* Inheritance Order */}
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title="📋 ترتيب الورثة"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="format-list-numbered"
                style={{ backgroundColor: theme.colors.accent.blue }}
              />
            )}
          />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title="1. أصحاب الفروض"
                expanded={expandedSection === 'fard'}
                onPress={() => toggleSection('fard')}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="account-check"
                    color={theme.colors.primary.main}
                  />
                )}
              >
                <Text style={styles.accordionContent}>
                  الزوج/الزوجة، الأب، الأم، الجد/الجدات، البنات/بنات الابن،
                  الأخوات الشقيقات/لأب، الإخوة لأم
                </Text>
              </List.Accordion>
              <List.Accordion
                title="2. العصبات"
                expanded={expandedSection === 'asaba'}
                onPress={() => toggleSection('asaba')}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="account-arrow-right"
                    color={theme.colors.status.success}
                  />
                )}
              >
                <Text style={styles.accordionContent}>
                  الابن/ابن الابن (بالنفس)، الأب/الجد (بالنفس)، الإخوة
                  الأشقاء/لأب (بالنفس)، الأخوات (مع الغير)، أبناء الإخوة،
                  الأعمام، أبناء الأعمام
                </Text>
              </List.Accordion>
              <List.Accordion
                title="3. ذوو الأرحام"
                expanded={expandedSection === 'blood'}
                onPress={() => toggleSection('blood')}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="account-heart"
                    color={theme.colors.accent.purple}
                  />
                )}
              >
                <Text style={styles.accordionContent}>
                  أولاد البنات (صنف 1)، أولاد الأخوات (صنف 2)، الأخوال والخالات
                  (صنف 3)، العمات (صنف 4)
                </Text>
              </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 20,
  },
  madhabGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  madhabCard: {
    flex: 1,
    minWidth: '45%',
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderLeftWidth: 4,
    backgroundColor: '#fff',
  },
  madhabTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  madhabDesc: {
    fontSize: 11,
    color: theme.colors.text.secondary,
    lineHeight: 16,
  },
  specialCase: {
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#f8f8f8',
    marginVertical: 6,
    borderLeftWidth: 4,
  },
  specialCaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  specialCaseTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  specialCaseDesc: {
    fontSize: 12,
    color: theme.colors.text.secondary,
    lineHeight: 18,
  },
  fardColumn: {
    minWidth: 100,
  },
  heirsColumn: {
    minWidth: 280,
  },
  fractionText: {
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    fontSize: 14,
  },
  heirsText: {
    fontSize: 12,
    color: theme.colors.text.secondary,
    lineHeight: 18,
  },
  hijabColumn: {
    minWidth: 120,
  },
  blockedText: {
    color: '#C62828',
    fontWeight: '600',
  },
  blockerText: {
    color: '#1B5E20',
    fontWeight: '600',
  },
  hijabTypeText: {
    color: theme.colors.text.secondary,
    fontSize: 12,
  },
  accordionContent: {
    padding: 14,
    color: theme.colors.text.secondary,
    fontSize: 13,
    lineHeight: 20,
  },
  bottomPadding: {
    height: 40,
  },
});

export default RulesScreen;
