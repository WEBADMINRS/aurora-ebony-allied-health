from pathlib import Path
import shutil

source = Path("/mnt/data")
dest = Path.home() / "Desktop" / "RS Assurance Group Resources"

files = {
    "Everwell-01-Engagement-Handover (2).docx":
        ("NDIS Compliance System Toolkit", "Engagement Handover.docx"),

    "Everwell-02-Statement-of-Applicability (1).docx":
        ("Risk & Governance Pack", "Statement of Applicability.docx"),

    "Everwell-03-Code-of-Conduct (1).docx":
        ("Workforce Documentation Pack", "Code of Conduct.docx"),

    "Everwell-04-Business-Continuity-Plan (1).docx":
        ("Risk & Governance Pack", "Business Continuity & Emergency Management Plan.docx"),

    "Everwell-05-Governance-and-Delegation (1).docx":
        ("Risk & Governance Pack", "Governance & Delegation Schedule.docx"),

    "Everwell-06-Work-Health-and-Safety-Policy (1).docx":
        ("Risk & Governance Pack", "Work Health & Safety Policy.docx"),

    "Everwell-Core-Module-Gap-Analysis (1).xlsx":
        ("NDIS Compliance System Toolkit", "Core Module Gap Analysis.xlsx"),

    "Everwell-Core-Module-Registers (1).xlsx":
        ("NDIS Compliance System Toolkit", "Core Module Registers.xlsx"),

    "Everwell-Workforce-Record-Templates (1).docx":
        ("Workforce Documentation Pack", "Workforce Record Templates.docx"),
}


for original, (folder, new_name) in files.items():

    src = source / original
    target_folder = dest / folder
    target_folder.mkdir(parents=True, exist_ok=True)

    shutil.copy(
        src,
        target_folder / new_name
    )

    print(f"Copied: {new_name}")


print("RS Assurance Group resource import complete.")
