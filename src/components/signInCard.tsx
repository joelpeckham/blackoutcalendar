/**
 * signInCard.tsx
 */

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { useSignIn } from "@clerk/clerk-react";
import type { SignInResource } from "@clerk/types";

import * as React from "react";

const SignInCard = () => {
  const { isLoaded, signIn } = useSignIn();

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      {isLoaded ? SignInCardContent(signIn) : SignInCardSkeletonContent()}
      <CardFooter>
        <Button variant="secondary">Sign In</Button>
      </CardFooter>
    </Card>
  );
};

const SignInCardContent = (signIn: SignInResource) => {
  console.log(signIn);
  return <CardContent>
    <p>Sign in form</p>
  </CardContent>;
};

const SignInCardSkeletonContent = () => {
  return (
    <CardContent>
      <p>Loading...</p>
    </CardContent>
  );
};

export { SignInCard };
