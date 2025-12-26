import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { COLORS } from '../constants/theme';

const { width } = Dimensions.get('window');

const DashboardScreen = ({ navigation }) => {
  
  const handleLogout = () => {
    navigation.replace('Login');
  };

  const MenuItem = ({ title, icon, color, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons name={icon} size={32} color={COLORS.white} />
      </View>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  const chartData = {
    labels: ["Laptop", "PC", "Proyektor", "Printer"],
    datasets: [
      {
        data: [15, 30, 8, 12]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: COLORS.white,
    backgroundGradientTo: COLORS.white,
    color: (opacity = 1) => `rgba(0, 74, 173, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.7,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => COLORS.gray,
    style: {
      borderRadius: 16
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greetingText}>Halo, Selamat Datang!</Text>
            <Text style={styles.userNameText}>Brody (Mahasiswa)</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
             <Ionicons name="person-circle-outline" size={40} color={COLORS.gold} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>65</Text>
            <Text style={styles.statsLabel}>Total Aset</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>3</Text>
            <Text style={styles.statsLabel}>Dipinjam</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>0</Text>
            <Text style={styles.statsLabel}>Rusak</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Statistik Kategori</Text>
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={width - 40}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            showValuesOnTopOfBars={true}
            style={{
              borderRadius: 16,
            }}
          />
        </View>

        <Text style={styles.sectionTitle}>Menu Utama</Text>
        
        <View style={styles.menuGrid}>
          <MenuItem 
            title="Aset Saya" 
            icon="cube-outline" 
            color={COLORS.primary} 
            onPress={() => console.log('List')}
          />
          <MenuItem 
            title="Scan QR" 
            icon="qr-code-outline" 
            color={COLORS.dark} 
            onPress={() => console.log('Scan')}
          />
          <MenuItem 
            title="Cari Aset" 
            icon="search-outline" 
            color="#F59E0B" 
            onPress={() => console.log('Search')}
          />
          <MenuItem 
            title="Riwayat" 
            icon="time-outline" 
            color={COLORS.success} 
            onPress={() => console.log('History')}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.danger} style={{marginRight: 10}}/>
          <Text style={styles.logoutText}>Keluar Aplikasi</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    color: COLORS.light,
    fontSize: 14,
  },
  userNameText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  scrollContent: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -15,
    marginBottom: 25,
  },
  statsCard: {
    backgroundColor: COLORS.white,
    width: '30%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statsNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statsLabel: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 10,
    marginBottom: 25,
    elevation: 2,
    alignItems: 'center', 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.dark,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FEF2F2',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  logoutText: {
    color: COLORS.danger,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DashboardScreen;