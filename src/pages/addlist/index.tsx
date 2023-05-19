/* eslint-disable react/no-unescaped-entities */
import AddProFooter from "@/components/AddProperty/AddProFooter";
import AddProHeader from "@/components/AddProperty/AddProHeader";
import { Container } from "@/components/Container";
import Menu from "@/components/Navbar/Menu";
import React from "react";
import Image from "next/image";

export default function addlist() {
  return (
    <div>
      <header>
        <AddProHeader />
      </header>
      <div>
        <div>
          <Container>
            <div>
              <div className="flex m-5">
                <div className="w-96">
                  <h4 className="">Step 1</h4>
                  <h1 className="">Tell us about your place</h1>
                  <p className="">
                    In this step, we'll ask you which type of property you have
                    and if guests will book the entire place or just a room.
                    Then let us know the location and how many guests can stay.
                  </p>
                </div>
                <div>
                  <Image
                    className="object-cover  w-96 rounded-sm"
                    src="https://assets-news.housing.com/news/wp-content/uploads/2018/11/09093208/Real-estate-basics-What-is-a-Freehold-property-FB-1200x700-compressed.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <footer>
        <AddProFooter />
      </footer>
    </div>
  );
}
