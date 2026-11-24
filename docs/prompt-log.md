<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Date</th>
      <th>Author</th>
      <th>Stage</th>
      <th>Tool and model</th>
      <th>Prompt</th>
      <th>Summary of answer</th>
      <th>Verdict (accepted, fixed, rejected) and why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        In the requirements pack, there are 4 main requirements ( functional, non-functional, hard cases, business logic ) You need to generate a general form, and actual example of how each of the functional and non-functional requirements should be represented. For the functional requirements, choose an example that needs to be covered by a hard case, one that needs business logic, and one that does not need either ( if it exists ). Output should explain why each story relates to either the hard cases or business logic, and why it does not.
      </td>
      <td>
        Both functional and non-functional requirements general forms. Three functional requirements, one that needs a hard case (FR-10), one that needs business logic (FR-16), and one that needs neither (FR-3). One non-functional requirement (Performance).
      </td>
      <td>Accepted, all required criterias were filled</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        For each of the functional requirements from 1 to 8 ( including 1 and 8 ), generate a user-story following the general form. For each FR, check if it relates to a hard case, or business logic, or both, and edit the story accordingly. Output should include all 8 user stories with a brief explanation of how the hard cases and business logic related to the story.
      </td>
      <td>
        First iteration of the first 8 user stories
      </td>
      <td>Accepted, all stories follow the general form and the ambiguities were recorded</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        This is a list of the ambiguities recorded for each of the 8 requirements, and the decision/edit to be made to the specific story.
        US-01: ignore registration field names, create a a new AC where a new customer registers with details that match an existing account and an error is shown<br>
        US-02: A customer is upgraded automatically by the system,  no downgrade option exists<br>
        US-03: this requirement is read-only so all transaction results should be covered later in the system, no changes<br>
        US-4: No limit for top-ups, agent wallet is not debited, require idempotency key for top-ups<br>
        US-05: no changes<br>
        US-06: enforce mix/max to stay within the global 5 egp to 10,000 egp,<br>
        US-07: hide disabled billers<br>
        US-08: enforce a 10 second timeout on inquiry with an error message, since netco has no live inquiry then only show available billers when requesting an inquiry, no inquiry for top-ups<br>
        Keep the previous user-stories the same except for the changes that need to be made, record any new ambiguities if they exist
      </td>
      <td>
        Fixed ambiguities for each user story accordingly based on the decisions made
      </td>
      <td>Accepted, ambiguities were fixed by creating or editing acceptance criteria</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        These are the decisions to be made for the new ambiguities<br>
        US-01: same email, duplicates names are okay<br>
        US-02: set a one week time period until a new account becomes verified<br>
        US-04: the client must generate a new key if a different transaction is to be made<br>
        US-06: Yes it should be rejected, both are inclusive<br>
        US-08 ( A5 ): PayLink uploads a file of payments once per day and receives a result file the next morning, a customer can only know what they owe when the file is uploaded<br>
        US-08 ( A6 ): inquiries are only available for billers that support it<br>
      </td>
      <td>
        Fixed newly appearing ambiguities
      </td>
      <td>Rejected, some of the new criteria created started overlapping with future functional requirements which may affect them negatively</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Gamal Emad</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        You are a requirements engineer helping on a college backend project (Advanced Software Engineering, CS352, Node.js) Project: PayLink, a bill-payment and wallet backend. The attached Student Brief is the source, we are in phase 1 requirements and a teammate already finished US-01 to US-08 (FR-1 to FR-8). My share is US-09 to US-16 (FR-9 to FR-16). STORY FORMAT (use exactly this) ID: US-number Source: FR-number Priority: Must Title: short name Story: As a role, I want capability, so that benefit. Acceptance criteria: AC-1 Given state / When action / Then observable, testable result ... Hard case: number(s) from section 2.7, or "None" Business rule: rule(s) from section 2.6, or "None" Notes: decisions that apply to this story After each story add two short lines, "Hard case:" and "Business rule:", explaining why the story does or does not relate to each. RULES: Every "Then" has a concrete checkable value. Use the section 2.5 state names exactly. Money is exact decimal, never floating point. Write only what the brief says, do not invent extra rules. Cross-reference other stories instead of duplicating their criteria. PROGRESS SO FAR AND DECISIONS ALREADY MADE (US-01 to US-08; stay consistent)... if there any ambiguities you found ASK ME DO NOT HANDLE IT YOUR SELF. Output should explain why each story relates to either the hard cases or business logic, and why it does not.
      </td>
      <td>
        Identified 11 ambiguities across US-09 to US-16 that would affect the acceptance criteria (such as rejected payment storage, limit basis, idempotency details, TopUpNet timeout/callbacks, and rounding) and asked for decisions before writing the stories.
      </td>
      <td>Fixed, some of the questions asked were already answered in sections 2.5 to 2.7 of the brief and required pointing the model back to those sections</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Gamal Emad</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        These are the decisions to be made for the new ambiguities<br>
        US-09: reject the payment with the reason "Amount outside the allowed payment range."<br>
        US-09: apply to the bill amount only. The daily total includes Completed payments and payments whose funds are still held in FundsHeld, SentToBiller, or Unknown. Each payment is counted once, not once per state.<br>
        US-09: For billers that support live inquiry, the customer must complete an inquiry and pay the exact amount returned. For billers without live inquiry, the customer enters the amount and proceeds without inquiry. An inquiry result is valid for the current payment attempt only and cannot be reused for a later attempt<br>
        US-10: An idempotency key is unique per customer. A repeat with the same details returns the original result, different details return an error. A duplicate arriving during processing returns the original result when ready. The key does not expire.<br>
        US-11: The 10-second timeout does not apply to TopUpNet. The payment remains SentToBiller until a callback arrives<br>
        US-13: The system re-queries an Unknown payment up to three times, after 1, 5, and 15 minutes, when the biller supports status queries. TopUpNet payments remain SentToBiller until a callback is received<br>
        US-14: Ignore and log callbacks that cannot be applied to the payment’s current state; do not change the payment state. Callback authentication is outside this requirement<br>
        US-15: Hard Case 8 is linked to US-15. Adding a new biller requires only a new integration and configuration; existing modules remain unchanged<br>
        US-16: The 1.5% mobile top-up fee is rounded to two decimal places using the half-up rule
      </td>
      <td>
        First complete iteration of US-09 to US-16 following the required format, hard cases, and business rules, while flagging 3 remaining minor open points.
      </td>
      <td>Accepted, all 8 user stories followed the exact format and incorporated the decisions, recording the remaining ambiguities</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Gamal Emad</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        1. If the amount is outside the allowed range, the payment is recorded as rejected . If the amount does not match the inquiry, the request returns an error and no payment is created. A request that does not create a payment does not use its idempotency key.<br>
        2. The system retries 1, 5, and 15 minutes after the payment becomes unknown. If a callback refers to a payment that does not exist, the system ignores and logs it.<br>
        3. The promotion includes both its start date and end date.<br>
        refactor these decisions for its US and resend it
      </td>
      <td>
        Refactored US-09, US-10, US-11, US-13, US-14, and US-16 to resolve the remaining ambiguities and presented the final complete set of user stories (US-09 to US-16).
      </td>
      <td>Accepted, all ambiguities were resolved cleanly without overlapping with other functional requirements</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        To generate the state diagram of the payment, i am going to use the PlanetUML tool, specifically the web server version. I need you to generate a prompt/code that i can input straight into PlanetUML and generate the state diagram Follow the state table exactly and do not add any states or assumptions, if there are any ambiguities, list them at the end like we did with the user stories. The output should be a single prompt that fulfills all the payment states
      </td>
      <td>
        Generated PlanetUML prompt for the payment state diagram
      </td>
      <td>Accepted, followed the required states in order and dealt with a small ambiguity (state end point) correctly</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        Now i am going to generate the Sequence Diagram — "Pay a Bill", using the step by step instructions provided in section 2.2 I need you to generate a PlanetUML prompt that creates a clear and unclustered diagram showing all the steps that are needed to complete a payment Use a or a separate note/fragment only for distinct interaction behaviors—such as no inquiry / local fee preview for non-inquiry billers. In case of ambiguities, make small assumptions that do not alter the main steps significantly.  The output should be a single prompt that fulfills all the steps with a list of ambiguities that were solved or need to be solved
      </td>
      <td>
        Generated a PlanetUML prompt for the "Pay a Bill" sequence diagram using the step by step instructions provided in the brief
      </td>
      <td>Fixed (in the next prompt), labeled a state change after the wrong step and did not add a fail branch for the fraud check</td>
    </tr>
    <tr>
      <td>11/23/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        Here are the decisions for the mentioned ambiguities:<br>
      N1: two separate steps/requests, keeping one clear main sequence diagram with a brief note/fragment for the inquiry-then-pay handoff.<br>
      N2:  while keeping the main flow focused on synchronous confirmation, add a concise branch/note showing SentToBiller  -> later callback (TopUpNet) or batch/next-morning file (NetCo)<br>
      N3: Immediate release upon entering Failed<br>
      N4: keep the Notifications call tied to Completed or Failed (or Rejected if included), and inside the Unknown state branch show a "Payment being processed" response without sending a completion/failure receipt.<br>
      N5: Dedicated Reconciliation module found in section 3.1 Modules<br>
      N6: Keep commission at completion<br> 
      Some other points to reconsider:<br>
      1- Placing the SentToBiller state note right after Payment Request is more natural since Section 2.5 defines the transition as "Request sent to biller -> SentToBiller"<br>
      2- If fraud check fails or funds are insufficient, you can add a brief alt branch showing Rejected before Step 6<br>
      Edit the previous prompt with these changes without making any other decisions outside of these points<br>
      </td>
      <td>
        Resolved ambiguities found in the sequence diagram
      </td>
      <td>Accepted, impplemented the decisions correctly with minor changes</td>
    </tr>
    <tr>
      <td>11/24/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        You are helping with designing the classes and methods needed for the PayLink applications that will be needed in phase 2 for implementation List all classes and methods using the user stories provided in the requirements pack Focus on the Core domain concepts & relationships Focus on the entities, value objects, attributes, relationships, and domain behaviors that model PayLink—such as Customer, Agent, Account, Wallet, LedgerEntry, Hold, Payment, Biller, Service, fee/commission rules, Notification, and audit records. Your output should be a list of classes and methods that are going to be user later to generate a class diagram
      </td>
      <td>
        Generated a list of classes that cover the core domain only
      </td>
      <td>Accepted, covers the core domain only, so controllers, repositories, and framework classes are left out. Each class lists the stories that justify it.</td>
    </tr>
    <tr>
     <td>11/24/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        All assumptions made make sense so keep the list as is with one small note to consider: In M5, just make sure the wording clearly refers to agent bill payments ( US-17 ) where the agent's wallet pays/holds the bill total (payerID / agentID on Payment) and receives the commission on completion rather than implying a debit on cash top-ups Now using the classes list generate a PlanetUML class diagram prompt, and keep note that design patterns and refactoring critiques formally due in Phase 2 so keep the diagram simple and unclustered
      </td>
      <td>
        Generated a PlanetUML class diagram prompt using the generated class list
      </td>
      <td>Fixed (in the next prompt), some multiplicy errors were found that could lead to confusion in the future</td>
    </tr>
    <tr>
      <td>11/24/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Design</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        Here are some of the fixes to reconsider in the diagram<br>
        1- Put verificationLevel (and daily-limit awareness) on Account  so both Customer and Agent inherit it consistently instead of duplicating it.<br> 
        2- `TopUp "1" -- "1" LedgerEntry : creates` is slightly tight for US-04 AC-6 / AC-8 (duplicate/conflicting idempotency key creates 0 new top-up ledger entries)—consider `0..1`<br>
        3- `Payment "1" *-- "1..*" PaymentTransition` assumes every payment has at least one transition, whereas `US-18` `AC-6` or rejected/invalid requests might either record a transition or reject immediately. Using `0..*` is safer unless every creation logs an initial transition.<br> 
        4- `AuditRecord "0..*" -- "1" Account : actor` requires an `Account` actor, yet `US-25` (`AC-1`, `AC-2`, `AC-3`, `AC-18`, `AC-19`, `AC-20`) repeatedly specifies `who = the system` for automatic releases, commissions, and velocity blocks. Either make `actor` `0..1` or represent a `System` actor/source clearly <br> 
        Generate a fixed PlanetUML Prompt that solves these ambiguities while keeping the same original format ( no significant changes)
      </td>
      <td>
        Applied fixed to the class diagram prompt while leaving the format unchanged
      </td>
      <td>Accepted, fixed the ambiguities cleanly</td>
    </tr>
    <tr>
      <td>Current Date</td>
      <td>Student Name</td>
      <td>Design/Requirements/Devops</td>
      <td>Tool + Model</td>
      <td>
        Enter Prompt Here
      </td>
      <td>
        Summary
      </td>
      <td>(to be filled by the team after reviewing the answer)</td>
    </tr>
  </tbody>
</table>
