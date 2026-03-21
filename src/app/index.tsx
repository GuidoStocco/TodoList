import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuthContext } from "@/hooks/useAuthContext";
import { View, ActivityIndicator } from "react-native";
import {COLORS} from '@/constants/colors'


export default function Index() {

  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    
    if (loading) return;

    if (user) {
      router.replace("/(app)/home/page");
    } else {
      router.replace("/(auth)/signin/page");
    }

  }, [user, loading]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.background }}>
      <ActivityIndicator 
        size={"large"}
        color={COLORS.primary}
      />
    </View>
  );
}