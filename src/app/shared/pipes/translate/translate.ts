import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '@/app/core/services/translation/translation';

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly translation = inject(TranslationService);

  transform(key: string): string {
    return this.translation.translate(key);
  }
}
