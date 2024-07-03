<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $array = parent::toArray($request);

        $array['image1'] != null ? $array['image1'] = url($array['image1']) : null;
        $array['image2'] != null ? $array['image2'] = url($array['image2']) : null;
        $array['image3'] != null ? $array['image3'] = url($array['image3']) : null;

        return $array;
    }
}
