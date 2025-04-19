"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,  
} from "@/components/ui/form";
import { Social } from "@/components/auth/social";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { login } from "@/actions/login";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
              <div className="space-y-4">
                {showTwoFactor && (
                    <FormField
                        control={form.control}
                        name="code"
                        render={({field}) => (
                            <FormItem>
                              <FormLabel>Two Factor Code</FormLabel>
                              <FormControl>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="123456"
                                />
                              </FormControl>
                              <FormMessage/>
                            </FormItem>
                        )}
                    />
                )}
                {!showTwoFactor && (
                    <>
                      <FormField
                          control={form.control}
                          name="email"
                          render={({field}) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                      {...field}
                                      disabled={isPending}
                                      placeholder="john.doe@example.com"
                                      type="email"
                                  />
                                </FormControl>
                                <FormMessage/>
                              </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="password"
                          render={({field}) => (
                              <FormItem>
                                <div className="flex justify-between items-center">
                                  <FormLabel>Password</FormLabel>
                                  <Button
                                      size="sm"
                                      variant="link"
                                      asChild
                                      className="font-normal"
                                  >
                                    <Link href="./reset">
                                      Forgot password?
                                    </Link>
                                  </Button>
                                </div>
                                <FormControl>
                                  <Input
                                      {...field}
                                      disabled={isPending}
                                      placeholder="******"
                                      type="password"
                                  />
                                </FormControl>
                                <FormMessage/>
                              </FormItem>
                          )}
                      />
                    </>
                )}
              </div>
              <FormError message={error || urlError}/>
              <FormSuccess message={success}/>
              <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full"
              >
                {showTwoFactor ? "Confirm" : "Login"}
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span
                className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
          </div>

          <Social/>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="./register" className="underline">
              Sign up
            </Link>
          </div>

        </div>
      </div>
  );
};
