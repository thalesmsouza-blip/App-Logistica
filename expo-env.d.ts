import { router, Stack } from 'expo-router';
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function RootLayoult(){
  return(
    <AuthProvider>
      <MainLayoult/>
    </AuthProvider>
  )
}

function MainLayoult(){
  const { setAuth } = useAuth();

  return(
    <Stack>
      <Stack.Screen
      name='index'
      options={{headerShown: false}}
      />
      <Stack.Screen
      name='(auth)/singup/page'
      options={{headerShown: false}}
      />
      <Stack.Screen
      name='(panel)/profile/page'
      options={{headerShown: false}}
      />
    </Stack>
  )
}