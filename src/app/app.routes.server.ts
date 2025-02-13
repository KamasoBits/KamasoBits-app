import { Component } from '@angular/core';
import { RedirectCommand } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
    
  },
];

 