"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useSession, signIn } from "next-auth/react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const { data: session } = useSession();
  const callbackUrl = "/dashboard";
  const user: any = session?.user;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Handle login logic here
    console.log("Login submitted");
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  const handleLoginGoogle = async () => {
    try {
      setTimeout(() => {}, 1500);
      await signIn("google", { callbackUrl });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginOffice = async () => {
    try {
      setTimeout(() => {}, 1500);
      await signIn("azure-ad", { callbackUrl });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-[#268ece] rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center text-hi-blue-700">{isSignUp ? "Create Account" : "Welcome Back"}</DialogTitle>
          <DialogDescription className="text-center text-black">{isSignUp ? "Sign up to start making a difference" : "Sign in to continue your journey with us"}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button type="button" variant="outline" onClick={handleLoginGoogle} className="w-full h-11 bg-white text-gray-600 border-2 border-foreground hover:border-[#268ece] hover:bg-[#268ece]/5 transition-all">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </Button>

            <Button type="button" variant="outline" onClick={handleLoginOffice} className="w-full h-11 bg-white text-gray-600 border-2 border-foreground hover:border-[#268ece] hover:bg-[#268ece]/5 transition-all">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23">
                <path fill="#f35325" d="M0 0h11v11H0z" />
                <path fill="#81bc06" d="M12 0h11v11H12z" />
                <path fill="#05a6f0" d="M0 12h11v11H0z" />
                <path fill="#ffba08" d="M12 12h11v11H12z" />
              </svg>
              Sign in with Office
            </Button>

            <Button type="button" variant="outline" className="w-full h-11 bg-white text-gray-600 border-2 border-foreground hover:border-[#268ece] hover:bg-[#268ece]/5 transition-all" onClick={() => handleSocialLogin("Apple")}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Sign in with Apple
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">Or continue with email</span>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="name" className="text-sm mb-2 block">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input id="name" type="text" placeholder="Enter your full name" className="pl-10 h-11" required />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-sm mb-2 block text-gray-600">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="email" type="email" placeholder="Enter your email" className="pl-10 h-11 bg-gray-100 border-none placeholder-gray-400 caret-gray-800 text-gray-500 focus:ring-gray-300 focus:outline-none" required />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-sm mb-2 text-gray-600 block">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 h-11 bg-gray-100 border-none placeholder-gray-400 caret-gray-800 text-gray-500 focus:ring-gray-300 focus:outline-none"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <button type="button" className="text-sm text-[#268ece] hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" className="w-full h-11 bg-[#268ece] hover:bg-[#1d7ab8] text-white" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Toggle Sign Up / Sign In */}
          <div className="text-center text-sm">
            <span className="text-gray-600">{isSignUp ? "Already have an account?" : "Don't have an account?"} </span>
            <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-[#268ece] hover:underline font-medium">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
