import Button from "./Button";
import styles from "./Cover.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ReactPlayer from "react-player";

export default function Cover() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sections + "border-r-4"}>
          <ReactPlayer
            url="https://upgrowthcommerce.com/fd80c008-4740-482b-9344-139e36b4e507"
            controls={true}
            width={"400px"}
            height={"500px"}
          />
        </div>

        <div className={styles.sections}>
          <h3 className={styles.heading}>Agencies Suck</h3>
          <p>"But wait... aren't you guys an an agency?"</p>
          <p>
            We are - but we're <strong> BRAND OWNERS</strong> first.
          </p>
          <p>
            And over the years we worked with a lot of agencies and these were
            the 3 things that drove us crazy.
          </p>

          <div className={styles.accordian}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. Agencies move too slow (1 month on-boarding's anyone??)
                </AccordionTrigger>
                <AccordionContent>
                  Have you ever had the most responsive sales experience then
                  pay your first invoice and it's crickets... ya we know your
                  pain. That's why we get started the day that you sign your
                  contract.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Agencies over-promise and under-deliver
                </AccordionTrigger>
                <AccordionContent>
                  We know... you've been promised "we'll double your sales" so
                  many times only to have results stay the same. We get that -
                  we give a roadmap to results and show you the incremental
                  actions that we are going to make to get there.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. Agencies don't communicate until it's too late
                </AccordionTrigger>
                <AccordionContent>
                  We've waited 5 days to hear back from agencies that we've
                  worked with on an issue that REALLY mattered to us. At
                  upGrowth we have shared slack channels and our goal is to get
                  back to you QUICK when issues arise!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="pt-3 pb-5">
            If any of this resonates with you read on...{" "}
          </p>

          <Button>GET STARTED</Button>
        </div>
      </div>
    </>
  );
}
