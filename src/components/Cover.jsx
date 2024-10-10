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
        <div className={styles.sections + " " + styles.videoPlayer}>
          <ReactPlayer
            url="https://upgrowthcommerce.com/fd80c008-4740-482b-9344-139e36b4e507"
            controls={true}
          />
        </div>

        <div className={styles.sections + " " + styles.bannerContent}>
          <h3 className={styles.heading}>
            Why Most Agencies <br /> Fall Short
          </h3>
          <p>"But hold on... aren't you an agency too?"</p>
          <p>
            Yes, we are – but we're <strong> BRAND OWNERS</strong> first and
            foremost.
          </p>
          <p>
            After years of collaborating with various agencies, we discovered
            three major frustrations that many clients share.
          </p>

          <div className={styles.accordian}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. Agencies Move Too Slowly (Endless Onboarding, Anyone?)
                </AccordionTrigger>
                <AccordionContent>
                  Ever experienced an ultra-responsive sales process, only for
                  things to slow down to a crawl after the first payment? We've
                  been there too. That’s why at our agency, the moment you sign
                  your contract, we hit the ground running – no time wasted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Over-Promising, Under-Delivering
                </AccordionTrigger>
                <AccordionContent>
                  We understand how it feels to be sold on unrealistic promises
                  like "we'll double your sales" only to see little to no
                  progress. Instead, we provide a clear, actionable roadmap from
                  day one, showing you exactly how we’ll drive results step by
                  step.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. Poor Communication Until It’s Too Late
                </AccordionTrigger>
                <AccordionContent>
                  Ever waited days for a critical response? We've felt that
                  frustration too. That’s why, at upGrowth, we prioritize
                  real-time communication through shared Slack channels. When
                  something matters, we're there – fast.
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
