import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucideArrowLeft } from '@lucide/angular';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';

const RESUME_PDF_PATH = 'pdfs/Gabriel_Bergamini_CV.pdf';

@Component({
  selector: 'app-resume',
  imports: [RouterLink, LucideArrowLeft, TranslatePipe],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly resumePdfPath = RESUME_PDF_PATH;
  protected readonly resumePdfUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(RESUME_PDF_PATH);
}
