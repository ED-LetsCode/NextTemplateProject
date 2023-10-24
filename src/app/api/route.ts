import { NextRequest, NextResponse } from "next/server";

import { logError } from "@/lib/logger";

import * as z from "zod";

export const GET = async (req: NextRequest) => {
  try {
    // const { obj } = await req.json();
    // youreValidationSchema.parse(obj);

    return new NextResponse("", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    // logError(
    //   "GET",
    //   "api/",
    //   "user",
    //   err instanceof Error ? err.message : JSON.stringify(err),
    // );

    if (err instanceof z.ZodError)
      return new NextResponse(err.message, { status: 400 });

    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    // const { obj } = await req.json();
    // youreValidationSchema.parse(obj);

    return new NextResponse("", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    // logError(
    //   "POST",
    //   "api/",
    //   "user",
    //   err instanceof Error ? err.message : JSON.stringify(err),
    // );

    if (err instanceof z.ZodError)
      return new NextResponse(err.message, { status: 400 });

    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    // const { obj } = await req.json();
    // youreValidationSchema.parse(obj);

    return new NextResponse("", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    // logError(
    //   "PUT",
    //   "api/",
    //   "user",
    //   err instanceof Error ? err.message : JSON.stringify(err),
    // );

    if (err instanceof z.ZodError)
      return new NextResponse(err.message, { status: 400 });

    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    // const { obj } = await req.json();
    // youreValidationSchema.parse(obj);

    return new NextResponse("", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    // logError(
    //   "DELETE",
    //   "api/",
    //   "user",
    //   err instanceof Error ? err.message : JSON.stringify(err),
    // );

    if (err instanceof z.ZodError)
      return new NextResponse(err.message, { status: 400 });

    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
