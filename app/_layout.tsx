import {tokenCache} from '@/utils/cache';
import {ClerkLoaded, ClerkProvider} from '@clerk/clerk-expo';
import {DarkTheme, ThemeProvider} from '@react-navigation/native';
import {Slot} from 'expo-router';

export default function RootLayout() {
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

    if (!publishableKey) {
        throw new Error('Missing Publishable Key');
    }

    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <ClerkLoaded>
                <ThemeProvider value={DarkTheme}>
                    <Slot />
                </ThemeProvider>
            </ClerkLoaded>
        </ClerkProvider>
    );
}
