# Investor Documents Directory

This directory contains downloadable documents for the Annita investor page.

## How to Add Documents

1. **Upload your files** to this directory
2. **Update the documents array** in `app/investors/page.tsx`
3. **Ensure proper file naming** (use kebab-case)
4. **Add tracking** - downloads are automatically tracked in Supabase

## File Naming Convention

- Use kebab-case: `annita-pitch-deck.pdf`
- Include company name prefix: `annita-`
- Use descriptive names: `business-plan`, `financial-model`

## Supported File Types

- **PDF**: `.pdf` - For documents, presentations, reports
- **Excel**: `.xlsx` - For financial models, data sheets
- **ZIP**: `.zip` - For multiple files or large packages
- **Word**: `.docx` - For detailed documents

## Document Categories

- **Investment**: Pitch decks, business plans, due diligence
- **Financial**: Financial models, cap tables, projections
- **Research**: Market analysis, competitive analysis
- **Technical**: Architecture docs, technical specifications
- **Legal**: Corporate structure, compliance documents
- **Team**: Team profiles, organizational charts
- **Recognition**: Awards, certifications, press coverage

## Tracking

All downloads are automatically tracked in the `investor_downloads` table in Supabase with:
- Document name and type
- Downloader information (if available)
- Timestamp and IP address
- Download count

## Example Document Structure

```javascript
{
  title: 'Pitch Deck',
  description: 'Comprehensive presentation of Annita\'s vision and strategy',
  icon: FileText,
  size: '15.2 MB',
  format: 'PDF',
  downloadUrl: '/documents/annita-pitch-deck.pdf',
  category: 'Investment'
}
```

## Security Notes

- Only upload documents intended for public investor access
- Ensure no sensitive information is exposed
- Consider implementing download limits or authentication for sensitive documents
