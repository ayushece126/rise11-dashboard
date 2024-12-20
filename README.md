This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Approach to Building the Dashboard

The primary approach was to create a user-friendly and visually consistent claim form with enhanced functionality and proper alignment. The implementation process included the following steps:

1. **Interactive Components**:  
   Added interactivity using React hooks (`useState`) to manage form state, including file uploads, radio button selections, and currency syncing.

2. **File Uploading**:  
   Built upload functionality for multiple sections, incorporating validation to allow only specific file types (e.g., PDFs).

3. **Alignment and Layout**:  
   Used Tailwind CSS flexbox utilities to align upload boxes in the second section and set a consistent height to create a polished appearance.

4. **Dynamic Calculations**:  
   Implemented automatic calculation of the claim value as 150% of the contract value to reduce manual input errors.

5. **Improved UX/UI**:  
   Enhanced spacing and added separating lines to visually structure the form, ensuring clarity and ease of navigation.

---

### Challenges Faced and Resolutions

1. **Alignment Issues**:  
   - **Challenge**: Upload boxes in the second section were uneven and misaligned.  
   - **Resolution**: Introduced consistent height using `h-[250px]` and applied flexbox alignment (`flex` and `justify-center`) for uniformity.

2. **File Upload Validation**:  
   - **Challenge**: Ensuring only PDFs were uploaded while handling errors gracefully.  
   - **Resolution**: Used basic validation within the `onChange` event of file inputs to check file type and size, providing user feedback when incorrect files were selected.

3. **Dynamic Value Syncing**:  
   - **Challenge**: Keeping contract and claim values dynamically synced while preventing race conditions in state updates.  
   - **Resolution**: Leveraged controlled components in React and added a `useEffect` hook to recompute claim value whenever the contract value changed.

4. **Spacing and Styling**:  
   - **Challenge**: Achieving a layout similar to the reference image while balancing functionality and design.  
   - **Resolution**: Added Tailwind classes for margins, padding, and spacing to separate form sections and create a visually pleasing hierarchy.

---

### Assumptions Made

1. **File Uploading**:  
   - Users would primarily upload PDF files, so validation focused on that format.

2. **Claim Value Calculation**:  
   - The formula for the claim value (150% of the contract value) was assumed to be constant across all cases.

3. **Section Design**:  
   - The reference image implied a structured and aligned layout, so all upload boxes were standardized to a height of 250px and aligned using flexbox for consistency.

4. **User Interaction**:  
   - Users would input valid data and use the form sequentially, allowing basic validations and state dependencies to suffice.

---

This structured approach, along with resolving challenges iteratively, ensured a functional, user-friendly, and visually cohesive dashboard.
